import { service } from "./service.module";
import { agent } from "./agent.module";

export class ServiceResponse {
    results: service[] = [{
        name: '',
        description: '',
        status: true,
        clients: [],
        agents: [],
    }];
    length: number=0;
}

export class AgentResponse {
    results: agent[] = [{
        name: '',
        email: '',
        status: true,
        services: [],
    }];
    length: number=0;
}