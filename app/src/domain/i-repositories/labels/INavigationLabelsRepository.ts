import type { NavigationLabels } from "@/domain";

export interface INavigationLabelsRepository {
    getAll(): Promise<NavigationLabels>;
}
