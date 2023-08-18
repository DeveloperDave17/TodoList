import { TodoController } from "./todoController";
import { DOMDisplayer } from "./domdisplayer";

let todoController = new TodoController();
let domdisplayer = new DOMDisplayer();

domdisplayer.displayLayout();
