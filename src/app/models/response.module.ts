import { service } from "./service.module";

export class Response {
    results: service[] = [{
        name: '',
        description: '',
        status: true,
        clients: [],
        agents: [],
    }];
    length: number=0;
}