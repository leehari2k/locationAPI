const { HTTP_STATUS_CODE } = require("../common/constant");
const db = require("../common/firebase.config");
const getAllProvinces = async () => {
  try {
    const provinceRef = db.collection("Provinces");
    const snapshot = await provinceRef.get();
    if (snapshot.empty) {
      //console.log("No documents.");
      return {
        message: "No documents",
        status: HTTP_STATUS_CODE.NOT_FOUND,
        success: false,
      };
    }
    const arr = [];
    snapshot.forEach((doc) => {
      //console.log(doc.id, "=>", doc.data());
      arr.push(doc.data());
    });
    //console.log(arr);
    return {
      message: "Get province successfully",
      data: arr,
      status: HTTP_STATUS_CODE.OK,
      success: true,
    };
  } catch (error) {
    return {
      message: error.message,
      status: error.status,
      success: false,
    };
  }
};

const getDistricts = async (ID) => {
  try {
    const districtRef = db.collection("Districts");
    const snapshot = await districtRef.where("idPro", "==", parseInt(ID)).get();
    if (snapshot.empty) {
      //console.log("No documents.");
      return {
        message: "No documents",
        status: HTTP_STATUS_CODE.NOT_FOUND,
        success: false,
      };
    }
    const arr = []
    snapshot.forEach((doc) => {
      //console.log(doc.id, "=>", doc.data());
      arr.push(doc.data());
    });
    return {
        message: "Get province successfully",
        data: arr,
        status: HTTP_STATUS_CODE.OK,
        success: true,
      };
  } catch (error) {
      return {
        message: error.message,
        status: error.status,
        success: false,
      }
  }
};

const getVillages = async (ID) => {
  try {
    const villageRef = db.collection("Villages");
    const snapshot = await villageRef.where("idDis", "==", parseInt(ID)).get();
    if (snapshot.empty) {
      //console.log("No documents.");
      return {
        message: "No documents",
        status: HTTP_STATUS_CODE.NOT_FOUND,
        success: false,
      };
    }
    const arr = []
    snapshot.forEach((doc) => {
      //console.log(doc.id, "=>", doc.data());
      arr.push(doc.data());
    });
    return {
        message: "Get province successfully",
        data: arr,
        status: HTTP_STATUS_CODE.OK,
        success: true,
      };
  } catch (error) {
    return {
        message: error.message,
        status: error.status,
        success: false,
      }
  }
};
module.exports = {
  getAllProvinces,
  getDistricts,
  getVillages,
};
