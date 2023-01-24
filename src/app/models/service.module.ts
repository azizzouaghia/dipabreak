export class service {
    serviceId?: string;
    name: string = '';
    description: string = '';
    price?: number;
    status: boolean = true;
    createdDate?: Date;
    clients: string[] = [];
    agents: string[] = [];
}