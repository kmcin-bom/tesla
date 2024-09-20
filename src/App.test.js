import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Tesla station information', async () => {
  render(<App />);

  // 예를 들어 South Melbourne, VIC가 이름으로 포함된 Popup이 있는지 확인
  await waitFor(() => {
    const stationName = screen.findByText(/South Melbourne, VIC/i);
    expect(stationName).toBeInTheDocument();
  }); 

   // "Status: OPEN" 텍스트가 렌더링될 때까지 기다립니다.
  await waitFor(() => {
    const status = screen.getByText(/Status: OPEN/i);
    expect(status).toBeInTheDocument();
    });

  // 충전소 개수가 렌더링될 때까지 기다립니다.
  await waitFor(() => {
    const stallCount = screen.getByText(/Number of charging stations:/i);
    expect(stallCount).toBeInTheDocument();
   });
});