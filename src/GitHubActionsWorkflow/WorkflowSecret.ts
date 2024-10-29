
export class WorkflowSecret {
    name: string;
    required: boolean;
    description: string;

    constructor(name: string, required: boolean, description: string) {
        this.name = name;
        this.required = required;
        this.description = description;
    }
}