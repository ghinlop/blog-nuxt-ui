export const useSettingStore = defineStore("settingStore", {
    state: () => ({
        setting: undefined as unknown as SettingModel,
        mounted: false,
    }),
});
