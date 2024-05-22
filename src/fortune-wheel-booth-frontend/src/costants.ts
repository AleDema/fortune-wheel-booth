import Astronaut from './assets/images/astronaut-loader.png';
import ckBtc from './assets/images/ckbtc.png';
import ckEth from './assets/images/cketh.png';
import IcpLogoLight from './assets/images/icp-logo-light.png';
import { WheelDataType } from 'react-custom-roulette';

export const PRIZES: WheelDataType[] = [
  {
    option: 'ckEth',
    image: { uri: ckEth, sizeMultiplier: 0.7, offsetY: 220 },
    style: { backgroundColor: '#00155C' },
  },
  {
    option: 'merch',
    image: { uri: Astronaut, sizeMultiplier: 0.7, offsetY: 220 },
    style: { backgroundColor: '#28ABE2' },
  },
  {
    option: 'merch',
    image: { uri: Astronaut, sizeMultiplier: 0.7, offsetY: 220 },
    style: { backgroundColor: '#F36526' },
  },
  {
    option: 'merch',
    image: { uri: Astronaut, sizeMultiplier: 0.7, offsetY: 220 },
    style: { backgroundColor: '#1EED3E' },
  },
  {
    option: 'icp',
    image: { uri: IcpLogoLight, sizeMultiplier: 0.7, offsetY: 220 },
    style: { backgroundColor: '#ED1E78' },
  },
  {
    option: 'merch',
    image: { uri: Astronaut, sizeMultiplier: 0.7, offsetY: 220 },
    style: { backgroundColor: '#005C00 ' },
  },
  {
    option: 'merch',
    image: { uri: Astronaut, sizeMultiplier: 0.7, offsetY: 220 },
    style: { backgroundColor: '#FFEC0C' },
  },
  {
    option: 'ckBtc',
    image: { uri: ckBtc, sizeMultiplier: 0.7, offsetY: 220 },
    style: { backgroundColor: '#564B9E' },
  },
  {
    option: 'merch',
    image: { uri: Astronaut, sizeMultiplier: 0.7, offsetY: 220 },
    style: { backgroundColor: '#FBB03C' },
  },
  {
    option: 'merch',
    image: { uri: Astronaut, sizeMultiplier: 0.7, offsetY: 220 },
    style: { backgroundColor: '#7B2582' },
  },
];

export const PRIZES_VALUES_MAPPING: Record<string, string> = {
  ckEth: '0.0015 ckETH',
  icp: '1 ICP',
  ckBtc: '0.00007 ckBTC',
  merch: 'merchandise',
};
