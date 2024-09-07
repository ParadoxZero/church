
export enum ScreenSize {
    SMALL = 0,
    MEDIUM = 1,
    LARGE = 2
}

export function getCurrentScreenSize(): ScreenSize {
    const width = window.innerWidth;
    if (width < 768) {
        return ScreenSize.SMALL;
    } else if (width < 1340) {
        return ScreenSize.MEDIUM;
    } else {
        return ScreenSize.LARGE;
    }
}
