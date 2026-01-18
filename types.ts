
export enum UserRole {
  ADMIN = 'Admin',
  CORRETOR = 'Corretor',
  CORRETORA = 'Corretora'
}

export enum LeadStatus {
  ATENDIMENTO = 'atendimento',
  VISITA = 'visita',
  VENDA = 'venda',
  PERDIDO = 'perdido'
}

export interface HistoryItem {
  data: string;
  note: string;
  status: LeadStatus;
}

export interface Lead {
  id: number;
  nome: string;
  tel: string;
  email: string;
  imovel: string;
  imovelLink?: string;
  dataCad: string;
  dataAtt: string;
  corretor: string;
  status: LeadStatus;
  hist: HistoryItem[];
}

export interface User {
  id: string;
  name: string;
  role: UserRole;
}

export interface AuthMap {
  [userId: string]: string;
}
