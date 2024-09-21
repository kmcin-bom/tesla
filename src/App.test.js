import { render, screen } from '@testing-library/react';
import App from './App';

import teslaData from "./data/tesla-sites-sample.json"

// JSON 데이터를 Mock 처리

jest.mock('react-leaflet', () => ({
  MapContainer: ({ children }) => <div>{children}</div>,
  TileLayer: () => <div>Mocked TileLayer</div>,
  Marker: ({ children }) => <div>Mocked Marker: {children}</div>,
  Popup: ({ children }) => <div>{children}</div>, // Popup 내부에 children 렌더링
}));

test('renders Tesla station information', async () => {
  
  console.log('Hello World');
  // console.log(teslaData);
  
  render(<App />);

  // "South Melbourne, VIC"가 포함된 Popup이 있는지 확인
  const stationName = await screen.findByText(/South Melbourne, VIC/i);
  console.log('Popup에 표시된 스테이션 이름:', stationName);
  expect(stationName).toBeInTheDocument();

  // 스테이션 상태가 "OPEN"인지를 확인
  const statusElements = await screen.findAllByText(/Status: OPEN/i);
  expect(statusElements.length).toBeGreaterThan(0);  // 적어도 하나의 "Status: OPEN"이 있어야 함

  // 정확한 텍스트 매칭을 위한 충전소 개수 확인
  const stallCountElement = await screen.findByText(/Number of charing stations: 4/i);
  // console.log('Popup에 표시된 충전소 개수: ');
  // console.log(stallCountElement);
  expect(stallCountElement).toBeInTheDocument();
});

