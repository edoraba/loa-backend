import userModel from "../user/user.model";
import Characters from "./characters.model";

async function getAll() {
  console.log("CHARACTER GET ALL")
  return Characters.find();
}

async function getByUserId(userId) {
  console.log("CHARACTER GET ALL FOR USER")
  return Characters.find({ user: userId });
};

async function getByName(name) {
  console.log(`CHARACTER GET BY NAME ${name}`)
  return Characters.find({ name: new RegExp(name, 'i') }).populate('user');
};

async function get(id) {
  return Characters.findOne({ _id: id });
}

async function create(characterData) {
  const character = new Characters(characterData);
  await character.save();

  if (characterData.user) {
    await userModel.findByIdAndUpdate(
      characterData.user,
      { $push: { characters: character._id } },
      { new: true, useFindAndModify: false }
    );
  }

  return character;
}

async function update(id, data) {
  return Characters.findOneAndUpdate({ _id: id }, data);
}

async function remove(id) {
  return Characters.findByIdAndDelete(id);
}

export { getAll, getByUserId, getByName, get, create, update, remove };
