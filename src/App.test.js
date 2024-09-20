import { render, screen, waitFor } from '@testing-library/react'; // waitFor 임포트 추가
import App from './App';

test('renders Tesla station information', async () => {
  render(<App />);

  
  // "South Melbourne, VIC"가 포함된 Popup이 있는지 확인
  await waitFor(() => {
    const stationName = screen.getByText(/South Melbourne, VIC/i);
    expect(stationName).toBeInTheDocument();
  }, { timeout: 5000 }); // 5초 동안 기다리기

  // 스테이션 상태가 "OPEN"인지를 확인
  await waitFor(() => {
    const status = screen.getByText(/Status: OPEN/i);
    expect(status).toBeInTheDocument();
  });

  // 충전소 개수 확인
  await waitFor(() => {
    const stallCount = screen.getByText(/Number of charging stations:/i);
    expect(stallCount).toBeInTheDocument();
  });
});