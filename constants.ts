
import { UserRole } from './types';

export const BASE_USERS: Record<string, { name: string; role: UserRole }> = {
    "admin": { name: "Administrador", role: UserRole.ADMIN },
    "marcus.barbosa": { name: "Marcus Barbosa", role: UserRole.CORRETOR },
    "robson.vinuto": { name: "Robson Vinuto", role: UserRole.CORRETOR },
    "marcelo.malafaia": { name: "Marcelo Malafaia", role: UserRole.CORRETOR },
    "julio.silva": { name: "Julio Silva", role: UserRole.CORRETOR },
    "felipe.lima": { name: "Felipe Lima", role: UserRole.CORRETOR },
    "josiane.curti": { name: "Josiane Curti", role: UserRole.CORRETORA },
    "marli.conde": { name: "Marli Conde", role: UserRole.CORRETORA },
    "tatiana.chaves": { name: "Tatiana Chaves", role: UserRole.CORRETORA },
    "vanessa.peixoto": { name: "Vanessa Peixoto", role: UserRole.CORRETORA },
    "robson.costa": { name: "Robson Costa", role: UserRole.CORRETOR }
};

export const LOCAL_STORAGE_KEYS = {
    AUTH: "vinutto_auth",
    LEADS: "vinutto_crm_vFinal"
};
