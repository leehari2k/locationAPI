const { HTTP_STATUS_CODE } = require("../common/constant");
const { database } = require("../common/firebase.config");
const db = database;

const getProvince = () => {
  try {
    const ref = db.ref("/province");
    return ref
      .once("value")
      .then((snapshot) => {
        //console.log(snapshot.val());
        const obj = snapshot.val();
        const arr = Object.values(obj);
        return {
          message: "Get province successfully",
          data: arr,
          status: HTTP_STATUS_CODE.OK,
          success: true,
        };
      })
      .catch((errorObject) => {
        //console.log('The read failed: ' + errorObject.name);
        return {
          message: "The read failed: " + errorObject.name,
          success: false,
          status: HTTP_STATUS_CODE.NOT_FOUND,
        };
      });
  } catch (error) {
    return {
      message: error.message,
      status: error.status,
      success: false,
    };
  }
};

const getDistrict = (parent_code) => {
  try {
    const ref = db.ref("/district");
    return ref
      .once("value")
      .then((snapshot) => {
        //console.log(snapshot.val());
        const obj = snapshot.val();
        const arr = Object.values(obj);
        //console.log(arr)
        const result = [];
        arr.forEach((district) => {
          if (district.parent_code == parent_code) {
            result.push(district);
          }
        });
        //console.log(result)
        return {
          message: "Get district successfully",
          data: result,
          status: HTTP_STATUS_CODE.OK,
          success: true,
        };
      })
      .catch((errorObject) => {
        //console.log('The read failed: ' + errorObject.name);
        return {
          message: "The read failed: " + errorObject.name,
          success: false,
          status: HTTP_STATUS_CODE.NOT_FOUND,
        };
      });
  } catch (error) {
    return {
      message: error.message,
      status: error.status,
      success: false,
    };
  }
};

const getVillage = (parent_code) => {
  try {
    const ref = db.ref("/village");
    return ref
      .once("value")
      .then((snapshot) => {
        //console.log(snapshot.val());
        const obj = snapshot.val();
        const arr = Object.values(obj);
        //console.log(arr)
        const result = [];
        arr.forEach((village) => {
          if (village.parent_code == parent_code) {
            result.push(village);
          }
        });
        //console.log(result)
        return {
          message: "Get district successfully",
          data: result,
          status: HTTP_STATUS_CODE.OK,
          success: true,
        };
      })
      .catch((errorObject) => {
        //console.log('The read failed: ' + errorObject.name);
        return {
          message: "The read failed: " + errorObject.name,
          success: false,
          status: HTTP_STATUS_CODE.NOT_FOUND,
        };
      });
  } catch (error) {
    return {
      message: error.message,
      status: error.status,
      success: false,
    };
  }
};

module.exports = {
  getDistrict,
  getVillage,
  getProvince,
};
