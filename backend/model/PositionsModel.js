const {model} =require("mongoose");
const {PositionsSchema} =require("../schemas/PositionsSchema");
const PositionsMOdel = new model("position",PositionsSchema);
module.exports={PositionsMOdel};