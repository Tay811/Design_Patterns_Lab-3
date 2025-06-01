import { Observer } from "./Observer";

export class Developer implements Observer {
    constructor(private name: string) {}

    update(message: string): void {
        console.log(`${this.name} получила уведомление: ${message}`);
    }
}
