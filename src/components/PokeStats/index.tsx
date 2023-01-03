import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import { Wrapper, RowWrapper, } from './PokeStats.styled';

interface StatsProps {
    stats: any
    children: any
}


const PokeStats = (props: StatsProps) => {
    const arrLabels = [] as any
    const arrDatasets = [] as any

    props.stats.map((stat: any) => {
        arrLabels.push(stat.stat.name)
        arrDatasets.push(stat.base_stat)
    })

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
      );
    const options = {
        responsive: true
      };
      const labels = [...arrLabels];

     const data = {
        labels,
        datasets: [
          {
            label: 'Estatísticas',
            data: arrDatasets,
            backgroundColor: '#FFF58C',
          },
        ],
      };
    return (
        <Wrapper>
            {props.children}
            <RowWrapper>
                 <Bar options={options} data={data}  />
            </RowWrapper>
        </Wrapper>
    )
}

export default PokeStats