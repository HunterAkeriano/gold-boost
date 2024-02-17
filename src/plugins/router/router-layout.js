const LayoutComponents = {
    default: () => import("../../templates/default-layout/DefaultLayout.vue"),
    catalog: () => import("../../templates/catalog-layout/CatalogLayout.vue"),
};

export async function routerLayout(route) {
    const { layout } = route.meta;
    const normalizedLayoutName = layout || "default";

    try {
        const layoutComponent = await LayoutComponents[normalizedLayoutName]();
        route.meta.layoutComponent = layoutComponent.default;
    } catch (error) {
        console.error(`Error importing component for layout ${normalizedLayoutName}:`, error);
    }
}
