import type { IAboutLabelsRepository } from "@/domain";
import type { AboutLabels } from "@/domain";
import aboutLabelsJSON from "@/data/datasources/labels/aboutLabels.json";

export class InMemoryAboutLabelsRepository implements IAboutLabelsRepository {
    private aboutLabels: AboutLabels = aboutLabelsJSON as AboutLabels;

    async getAll(): Promise<AboutLabels> {
        return this.aboutLabels;
    }
}
