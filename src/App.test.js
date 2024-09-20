import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Tesla station information', async () => {
  render(<App />);

  // 예를 들어 Ashburn, VA가 이름으로 포함된 Popup이 있는지 확인
  const stationName = await screen.findByText(/Eaton, WA/i);
  expect(stationName).toBeInTheDocument();

  // 스테이션 상태가 "OPEN"인지를 확인
  const status = await screen.findByText(/Status: OPEN/i);
  expect(status).toBeInTheDocument();

  // 충전소 개수 확인
  const stallCount = await screen.findByText(/Number of charging stations:/i);
  expect(stallCount).toBeInTheDocument();
});