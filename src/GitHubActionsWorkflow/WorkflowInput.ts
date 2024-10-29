export class WorkflowInput {
    name: string;
    type: string;
    description: string;
    required: boolean;
    default: string;

    constructor(name: string, type: string, description: string, required: boolean, defaultVal: string) {
        this.name = name;
        this.type = type;
        this.description = description;
        this.required = required;
        this.default = defaultVal;
    }
}