import type { IContactLabelsRepository } from "@/domain";
import type { ContactLabels } from "@/domain";
import contactLabelsJSON from "@/data/datasources/labels/contactLabels.json";

export class InMemoryContactLabelsRepository implements IContactLabelsRepository {
    private contactLabels: ContactLabels = contactLabelsJSON as ContactLabels;

    async getAll(): Promise<ContactLabels> {
        return this.contactLabels;
    }
}
