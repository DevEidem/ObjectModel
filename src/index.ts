import ModelObject from "./ModelObject";
import Board from "./boards";
import State from "./state";
import ModelCollection from "./ModelCollection";
import Directories from "./directories";
import Fan from "./fans";
import Heat from "./heat";
import HttpEndpoint from "./httpEndpoints";
import InputChannel from "./inputs/InputChannel";
import Job from "./job";
import Limits from "./limits";
import Message from "./messages";
import Move from "./move";
import Plugin from "./plugins";
import Scanner from "./scanner";
import Sensors from "./sensors";
import Spindle from "./spindles";
import UserSession from "./userSessions";
import Volume from "./volumes";

// Unfortunately we need to define a way to update arrays to remain compatible with Vue 2 (due to IE11).
// This will become obsolete as soon as DWC is upgraded to Vue 3, but that isn't going to happen anytime soon.
// Until then a Vue 2 user would have to call something like this on initialization to work around this limitation:
// globalThis._duetModelSetArray = (array, index, value) => Vue.set(array, index, value);
(globalThis as any)._duetModelSetArray = (array: Array<any>, index: number, value: any) => array[index] = value;
export function setArrayItem(array: Array<any>, index: number, value: any) {
    (globalThis as any)._duetModelSetArray(array, index, value);
}

export default class ObjectModel extends ModelObject {
    readonly boards: ModelCollection<Board> = new ModelCollection(Board);
    readonly directories: Directories = new Directories();
    readonly fans: ModelCollection<Fan> = new ModelCollection(Fan);
    readonly global: Map<string, any> = new Map<string, any>();
    readonly heat: Heat = new Heat();
    readonly httpEndpoints: ModelCollection<HttpEndpoint> = new ModelCollection(HttpEndpoint);
    readonly inputs: ModelCollection<InputChannel> = new ModelCollection(InputChannel);
    readonly job: Job = new Job();
    readonly limits: Limits = new Limits();
    readonly messages: ModelCollection<Message> = new ModelCollection(Message);         // must be manually cleared after updates
    readonly move: Move = new Move();
    readonly plugins: ModelCollection<Plugin> = new ModelCollection(Plugin);
    readonly scanner: Scanner = new Scanner();
    readonly sensors: Sensors = new Sensors();
    readonly spindles: ModelCollection<Spindle> = new ModelCollection(Spindle);
    readonly state: State = new State();
    readonly userSessions: ModelCollection<UserSession> = new ModelCollection(UserSession);
    readonly volumes: ModelCollection<Volume> = new ModelCollection(Volume);
}
