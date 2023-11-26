import Characters from "./characters.model";

async function getAll() {
  console.log("CHARACTER GET ALL")
  return Characters.find();
}

async function get(id) {
  return Characters.findOne({ _id: id });
}

async function create(data) {
  return new Characters(data).save();
}

async function update(id, data) {
  return Characters.findOneAndUpdate({ _id: id }, data);
}

async function remove(id) {
  return Characters.findByIdAndDelete(id);
}

export { getAll, get, create, update, remove };
