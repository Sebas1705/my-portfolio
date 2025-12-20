import type { INavigationLabelsRepository } from "@/domain";
import type { NavigationLabels } from "@/domain";
import navigationLabelsJSON from "@/data/datasources/labels/navigationLabels.json";

export class InMemoryNavigationLabelsRepository implements INavigationLabelsRepository {
    private navigationLabels: NavigationLabels = navigationLabelsJSON as NavigationLabels;

    async getAll(): Promise<NavigationLabels> {
        return this.navigationLabels;
    }
}
