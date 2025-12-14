import type { ContactLabels } from "@/domain";

export interface IContactLabelsRepository {
    getAll(): Promise<ContactLabels>;
}
