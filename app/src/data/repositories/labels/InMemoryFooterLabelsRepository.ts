import type { IFooterLabelsRepository } from "@/domain";
import type { FooterLabels } from "@/domain";
import footerLabelsJSON from "@/data/datasources/labels/footerLabels.json";

export class InMemoryFooterLabelsRepository implements IFooterLabelsRepository {
    private footerLabels: FooterLabels = footerLabelsJSON as FooterLabels;

    async getAll(): Promise<FooterLabels> {
        return this.footerLabels;
    }
}
