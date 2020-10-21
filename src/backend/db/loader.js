import models from "./models.js";
import extensions from "./extensions.js";

const hasProperty = (x, y) => Object.prototype.hasOwnProperty.call(x, y);
const hasFunction = (x, y) => hasProperty(x, y) && x[y] instanceof Function;
const applyToModel = (model, property, extension) => {
  if (!hasFunction(extension, property)) return;
  extension[property](model[property]);
};

const extend = (name, model) => {
  if (!hasProperty(extensions, name)) {
    console.log(`[MongoDB] Extensions not found for ${name}`);
    return model;
  }
  const extension = extensions[name];
  for (let property in extensions.ExtensionBase) {
    applyToModel(model, property, extension);
  }
  return model;
};

const load = db => {
  const compiledModels = {};

  for (let name in models) {
    const extendedModel = extend(name, models[name]);
    compiledModels[name] = db.model(name, extendedModel);
  }

  console.log("[MongoDB] Extensions and models compiled");
  return compiledModels;
};

export default load;
