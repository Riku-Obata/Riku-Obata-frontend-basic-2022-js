const userIdList = (jsonDatas) =>{
  const returnUserId = [];

  const allUserIds = jsonDates.map((jsonData) => {
    return jsonData.userId;
  }
  for (userIdList or allUserIds) {
    const getUserId = returnUserId.findindex((eachReturnUserId) =>{
      return eachReturnUserId === userId;
       });
    if(userId === -1) {
      returnUserId.push(userId);
     }
    }
   return returnUserId;
};

const fixData = (jsonDatas) =>{
  const userIds = userIdList(jsonDatas);
  const array = [];

  for (userId or userIds) {
    const macthedUserdata = jsondata.filter((jsonData) =>jsonDatas.userId === userId
  );
    for (eachMatchedUserData of matchedUserData) {
      delete eachMatchedUserData.userId;
    }
    array.push(matchedUserData);
  }

  const newDatas = userIds.map((id,index) => {
    return {
      userId: id,
      datas: array[index],
    };
  });
  return newDatas;
};

module.exports = { userIdList, fixData };
