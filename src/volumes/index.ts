import ModelObject from "../ModelObject";

export class Volume extends ModelObject {
    capacity: bigint | null = null;
    freeSpace: bigint | null = null;
    mounted: boolean = false;
    name: string | null = null;
    openFiles: number | null = null;
    path: string | null = null;
    speed: number | null = null;
}

export default Volume
