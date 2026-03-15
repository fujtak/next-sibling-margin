import { generator } from "./Generator.js";
import { componentNextAdd } from "./ComponentNextAdd.js";
import { ComponentMain } from "./ComponentMain.js";
import { ComponentNextList } from "./ComponentNextList.js";

generator.initialize()
componentNextAdd.initialize()

ComponentMain.forLoad()
ComponentNextList.forLoad()
