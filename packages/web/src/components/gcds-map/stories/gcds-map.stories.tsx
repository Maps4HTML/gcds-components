export default {
  title: 'Components/Map',
  component: 'gcds-map',
};

// no jsx version
const Template = (args) => `
  <gcds-map lat="${args.lat}" lon="${args.lon}" zoom="${args.zoom}" controls>
    <gcds-map-layer
      label="Canada Base Map - Transportation (CBMT)"
      src="https://geogratis.gc.ca/mapml/en/osmtile/cbmt/"
      checked="${args.checked}"
      opacity="${args.layer1Opacity}"
    ></gcds-map-layer>
    <gcds-map-layer
      label="Another Layer"
      src="https://geogratis.gc.ca/mapml/en/osmtile/kNN_LandCover_VegTreed_250m/"
    ></gcds-map-layer>
  </gcds-map>
`;

export const Default = Template.bind({});
Default.args = {
  lat: 45.4215,
  lon: -75.6972,
  zoom: 10,
  layer1Opacity: 1,
  checked: true,
};

export const CustomMap = Template.bind({});
CustomMap.args = {
  lat: 40.7128,
  lon: -74.0060,
  zoom: 8,
  layer1Opacity: 0.8,
  checked: false,
};
