export class agent {
    agentId?: string;
    name: string = '';
    email: string = '';
    phone?: number;
    latitude?: number;
    longitude?: number;
    password?:string='';
    status: boolean = true;
    createdDate?: Date;
    services: string[] = [];
}   