const List = fetch(
  "https://raw.githubusercontent.com/izinga/UI_DEMO/master/json/project_list.json"
).then(response => response.json());
export default List;
