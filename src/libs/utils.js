const combine = arr => {
  let combined = arr.reduce(function(result, item) {
    let current = result[item.name];

    result[item.name] = !current
      ? item
      : {
          date: item.date,
          name: item.name,
          color: item.color,
          commit: current.commit + item.commit,
          codes: current.codes + item.codes
        };

    return result;
  }, {});

  return Object.keys(combined).map(function(key) {
    return combined[key];
  });
};

const generateData = arr => {
  const finalArray = [];
  let finalData = [];
  let listDate = [];

  for (let i in arr) {
    if (arr[i].defaultBranchRef != null || arr[i].primaryLanguage != null) {
      let nodes = arr[i].defaultBranchRef.target.history.nodes;
      let name = arr[i].primaryLanguage.name;

      let instance = finalData.some(obj => obj.label === name);
      if (!instance) {
        finalData.push({
          label: name,
          data: [],
          backgroundColor: arr[i].primaryLanguage.color
        });
      }

      let index = finalData.findIndex(obj => obj.label === name);
      finalData[index].data.push(
        arr[i].defaultBranchRef.target.history.totalCount
      );

      // > Get all date for chart Line
      let date = new Date(arr[i].defaultBranchRef.target.pushedDate);
      let yyyy = date.getFullYear();
      let mm = date.getMonth();
      let dd = date.getDate();
      if (listDate.indexOf(`${dd}-${mm}-${yyyy}`) === -1) {
        listDate.push(`${dd}-${mm}-${yyyy}`);
      }

      let additions = nodes.reduce((res, data) => res + data.additions, 0);
      let deletions = nodes.reduce((res, data) => res + data.deletions, 0);

      finalArray.push({
        date: arr[i].defaultBranchRef.target.pushedDate,
        name: arr[i].primaryLanguage.name,
        color: arr[i].primaryLanguage.color,
        commit: arr[i].defaultBranchRef.target.history.totalCount,
        codes: additions - deletions
      });
    }
  }
  let result = combine(finalArray);
  return {
    result,
    finalData,
    listDate
  };
};

export default generateData;
