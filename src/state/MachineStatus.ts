export enum MachineStatus {
    disconnected = "disconnected",
    starting = "starting",
    updating = "updating",
    off = "off",
    halted = "halted",
    pausing = "pausing",
    paused = "paused",
    resuming = "resuming",
    cancelling = "cancelling",
    processing = "processing",
    simulating = "processing",
    busy = "busy",
    changingTool = "changingTool",
    idle = "idle"
}

export default MachineStatus
