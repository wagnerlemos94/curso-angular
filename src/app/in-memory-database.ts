import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDatabase implements InMemoryDbService{
    createDb(){
        const categories = [
            { id:1, name: "Moradia", description:"Pagamentos de Contas de Casa"},
            { id:2, name: "Saúde", description:"Plano de Saúde e Remédios"},
            { id:3, name: "Lazer", description:"Conema, parques, praia, etc"},
            { id:4, name: "Salário", description:"Recebimento de Saçário"},
            { id:5, name: "Freelas", description:"Trabalhos como freelancer"}

        ]
        return { categories}
    }
}