
import React, { useState, useEffect, useCallback } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { User, AuthMap, Lead } from './types';
import { BASE_USERS, LOCAL_STORAGE_KEYS } from './constants';

const App: React.FC = () => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [authMap, setAuthMap] = useState<AuthMap>({});
    const [leads, setLeads] = useState<Lead[]>([]);

    // Carregamento inicial de dados
    useEffect(() => {
        const storedAuth = localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH);
        let currentAuth: AuthMap = {};
        
        if (storedAuth) {
            try {
                currentAuth = JSON.parse(storedAuth);
            } catch (e) {
                currentAuth = {};
            }
        }

        // Garante que usuários base existam no mapa de senhas
        let needsUpdate = false;
        Object.keys(BASE_USERS).forEach(userId => {
            if (!currentAuth[userId]) {
                currentAuth[userId] = "123";
                needsUpdate = true;
            }
        });

        if (needsUpdate) {
            localStorage.setItem(LOCAL_STORAGE_KEYS.AUTH, JSON.stringify(currentAuth));
        }
        
        setAuthMap(currentAuth);

        const storedLeads = localStorage.getItem(LOCAL_STORAGE_KEYS.LEADS);
        if (storedLeads) {
            try {
                setLeads(JSON.parse(storedLeads));
            } catch (e) {
                setLeads([]);
            }
        }
    }, []);

    const handleLogin = (user: User) => {
        setCurrentUser(user);
    };

    const handleLogout = () => {
        setCurrentUser(null);
    };

    const updateLeads = (newLeads: Lead[]) => {
        setLeads(newLeads);
        localStorage.setItem(LOCAL_STORAGE_KEYS.LEADS, JSON.stringify(newLeads));
    };

    // Função de atualização de senha robusta
    const updateAuth = useCallback((newAuth: AuthMap) => {
        // Criamos uma nova referência de objeto para garantir que o React detecte a mudança
        const updatedMap = { ...newAuth };
        // Persistência imediata
        localStorage.setItem(LOCAL_STORAGE_KEYS.AUTH, JSON.stringify(updatedMap));
        // Atualização do estado
        setAuthMap(updatedMap);
    }, []);

    return (
        <div className="min-h-screen bg-slate-50">
            {!currentUser ? (
                <Login authMap={authMap} onLogin={handleLogin} />
            ) : (
                <Dashboard 
                    currentUser={currentUser} 
                    leads={leads} 
                    onUpdateLeads={updateLeads} 
                    onLogout={handleLogout}
                    authMap={authMap}
                    onUpdateAuth={updateAuth}
                />
            )}
        </div>
    );
};

export default App;
