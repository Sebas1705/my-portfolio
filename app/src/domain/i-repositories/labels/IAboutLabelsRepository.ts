import type { AboutLabels } from "@/domain";

export interface IAboutLabelsRepository {
    getAll(): Promise<AboutLabels>;
}
