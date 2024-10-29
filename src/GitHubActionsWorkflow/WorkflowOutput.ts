
export class WorkflowOutput {
    name: string;
    value: string;
    description: string;

    constructor(name: string, value: boolean, description: string) {
        this.name = name;
        this.value = value;
        this.description = description;
    }
}