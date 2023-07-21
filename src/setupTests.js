import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import 'jest-enzyme';
import './matchMedia';
import 'mutationobserver-shim';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-18';
import {createSerializer} from 'enzyme-to-json';
import "jest-location-mock";

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: 'deep', noKey: true }));
