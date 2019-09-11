import { get } from "../master.services";

//https://webhook.site/#!/58685ebe-abc1-4c78-a62b-3a435a697a4e/70c845f0-d3f3-4c98-bf50-0634da0fbe6e/1
const fetchPersonByLicence = (licence: string) => {
  // const url = `${process.env.REACT_APP_API_URL}persons/extendedByLicence/${licence}`;
  const url = "https://webhook.site/58685ebe-abc1-4c78-a62b-3a435a697a4e";
  return get({ url });
};

const PersonService = {
  fetchPersonByLicence
};

export default PersonService;
