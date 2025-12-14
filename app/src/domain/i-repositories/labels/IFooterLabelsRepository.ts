import type { FooterLabels } from "@/domain";

export interface IFooterLabelsRepository {
    getAll(): Promise<FooterLabels>;
}
