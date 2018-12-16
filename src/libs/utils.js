const combine = arr => {
  var combined = arr.reduce(function(result, item) {
    var current = result[item.name];
    result[item.name] = !current
      ? item
      : {
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

  for (let i in arr) {
    if (arr[i].defaultBranchRef != null || arr[i].primaryLanguage != null) {
      let nodes = arr[i].defaultBranchRef.target.history.nodes;
      let additions = nodes.reduce((res, data) => res + data.additions, 0);
      let deletions = nodes.reduce((res, data) => res + data.deletions, 0);

      finalArray.push({
        name: arr[i].primaryLanguage.name,
        color: arr[i].primaryLanguage.color,
        commit: arr[i].defaultBranchRef.target.history.totalCount,
        codes: additions - deletions
      });
    }
  }

  let result = combine(finalArray);
  return result;
};

export default generateData;
