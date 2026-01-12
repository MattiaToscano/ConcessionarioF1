<?php

namespace Database\Seeders;

use App\Models\Car;
use Illuminate\Database\Seeder;

class CarSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $cars = [
            [
                'name' => 'Ferrari SF-23',
                'year' => '2023',
                'team' => 'Scuderia Ferrari',
                'price' => '€15.000.000',
                'image' => 'https://media.formula1.com/image/upload/f_auto/q_auto/v1676983081/fom-website/2023/Ferrari/ferrari-sf-23-launch.jpg',
                'specs' => json_encode([
                    'engine' => 'Ferrari 066/10 1.6L V6 Turbo',
                    'power' => '1000+ CV',
                    'fuel' => 'Benzina + Sistema Ibrido',
                    'cylinders' => '6',
                    'rpm' => '15.000 giri/min'
                ]),
                'hybrid' => json_encode([
                    'system' => 'MGU-K + MGU-H',
                    'battery' => 'Batteria al litio',
                    'recovery' => 'Sistema di recupero energia in frenata e scarico'
                ]),
                'performance' => json_encode([
                    'topSpeed' => '350+ km/h',
                    'acceleration' => '0-100 km/h in 2.6s',
                    'lateralG' => '5G in curva'
                ]),
                'chassis' => 'Monoscocca in fibra di carbonio',
                'suspension_front' => 'Push-rod con ammortizzatori Öhlins',
                'suspension_rear' => 'Pull-rod con ammortizzatori Öhlins',
                'gearbox' => 'Cambio sequenziale 8 rapporti + retromarcia',
                'weight' => '798',
                'drivers' => 'Charles Leclerc, Carlos Sainz',
                'victories' => '1',
                'podiums' => '8'
            ],
            [
                'name' => 'Red Bull RB19',
                'year' => '2023',
                'team' => 'Oracle Red Bull Racing',
                'price' => '€18.000.000',
                'image' => 'https://media.formula1.com/image/upload/f_auto/q_auto/v1676549816/fom-website/2023/Red%20Bull/red-bull-rb19-launch.jpg',
                'specs' => json_encode([
                    'engine' => 'Red Bull Powertrains RBPT 1.6L V6 Turbo',
                    'power' => '1000+ CV',
                    'fuel' => 'Benzina + Sistema Ibrido',
                    'cylinders' => '6',
                    'rpm' => '15.000 giri/min'
                ]),
                'hybrid' => json_encode([
                    'system' => 'MGU-K + MGU-H',
                    'battery' => 'Batteria al litio ad alta densità',
                    'recovery' => 'Sistema ERS avanzato'
                ]),
                'performance' => json_encode([
                    'topSpeed' => '355+ km/h',
                    'acceleration' => '0-100 km/h in 2.5s',
                    'lateralG' => '5.5G in curva'
                ]),
                'chassis' => 'Monoscocca in fibra di carbonio ultra-leggera',
                'suspension_front' => 'Push-rod con geometria avanzata',
                'suspension_rear' => 'Pull-rod ottimizzato per aerodinamica',
                'gearbox' => 'Cambio sequenziale 8 rapporti',
                'weight' => '798',
                'drivers' => 'Max Verstappen, Sergio Pérez',
                'victories' => '21',
                'podiums' => '35'
            ],
            [
                'name' => 'Mercedes W14',
                'year' => '2023',
                'team' => 'Mercedes-AMG Petronas F1 Team',
                'price' => '€16.500.000',
                'image' => 'https://media.formula1.com/image/upload/f_auto/q_auto/v1676467200/fom-website/2023/Mercedes/mercedes-w14-launch.jpg',
                'specs' => json_encode([
                    'engine' => 'Mercedes-AMG F1 M14 E Performance 1.6L V6 Turbo',
                    'power' => '1000+ CV',
                    'fuel' => 'Benzina + Sistema Ibrido',
                    'cylinders' => '6',
                    'rpm' => '15.000 giri/min'
                ]),
                'hybrid' => json_encode([
                    'system' => 'MGU-K + MGU-H',
                    'battery' => 'Batteria al litio Mercedes',
                    'recovery' => 'Sistema ibrido ad alta efficienza'
                ]),
                'performance' => json_encode([
                    'topSpeed' => '345+ km/h',
                    'acceleration' => '0-100 km/h in 2.6s',
                    'lateralG' => '5G in curva'
                ]),
                'chassis' => 'Monoscocca in carbonio avanzato',
                'suspension_front' => 'Push-rod',
                'suspension_rear' => 'Pull-rod',
                'gearbox' => 'Cambio sequenziale 8 rapporti Mercedes',
                'weight' => '798',
                'drivers' => 'Lewis Hamilton, George Russell',
                'victories' => '0',
                'podiums' => '5'
            ],
            [
                'name' => 'McLaren MCL60',
                'year' => '2023',
                'team' => 'McLaren F1 Team',
                'price' => '€14.000.000',
                'image' => 'https://media.formula1.com/image/upload/f_auto/q_auto/v1676287200/fom-website/2023/McLaren/mclaren-mcl60-launch.jpg',
                'specs' => json_encode([
                    'engine' => 'Mercedes-AMG F1 M14 E Performance 1.6L V6 Turbo',
                    'power' => '1000+ CV',
                    'fuel' => 'Benzina + Sistema Ibrido',
                    'cylinders' => '6',
                    'rpm' => '15.000 giri/min'
                ]),
                'hybrid' => json_encode([
                    'system' => 'MGU-K + MGU-H',
                    'battery' => 'Batteria al litio',
                    'recovery' => 'Sistema ERS Mercedes'
                ]),
                'performance' => json_encode([
                    'topSpeed' => '340+ km/h',
                    'acceleration' => '0-100 km/h in 2.7s',
                    'lateralG' => '5G in curva'
                ]),
                'chassis' => 'Monoscocca in fibra di carbonio',
                'suspension_front' => 'Push-rod',
                'suspension_rear' => 'Pull-rod',
                'gearbox' => 'Cambio sequenziale 8 rapporti',
                'weight' => '798',
                'drivers' => 'Lando Norris, Oscar Piastri',
                'victories' => '0',
                'podiums' => '3'
            ],
            [
                'name' => 'Aston Martin AMR23',
                'year' => '2023',
                'team' => 'Aston Martin Aramco Cognizant F1 Team',
                'price' => '€13.500.000',
                'image' => 'https://media.formula1.com/image/upload/f_auto/q_auto/v1676296800/fom-website/2023/Aston%20Martin/aston-martin-amr23-launch.jpg',
                'specs' => json_encode([
                    'engine' => 'Mercedes-AMG F1 M14 E Performance 1.6L V6 Turbo',
                    'power' => '1000+ CV',
                    'fuel' => 'Benzina + Sistema Ibrido',
                    'cylinders' => '6',
                    'rpm' => '15.000 giri/min'
                ]),
                'hybrid' => json_encode([
                    'system' => 'MGU-K + MGU-H',
                    'battery' => 'Batteria al litio ad alte prestazioni',
                    'recovery' => 'Sistema ERS ottimizzato'
                ]),
                'performance' => json_encode([
                    'topSpeed' => '345+ km/h',
                    'acceleration' => '0-100 km/h in 2.6s',
                    'lateralG' => '5G in curva'
                ]),
                'chassis' => 'Monoscocca in carbonio Aston Martin',
                'suspension_front' => 'Push-rod avanzato',
                'suspension_rear' => 'Pull-rod ottimizzato',
                'gearbox' => 'Cambio sequenziale 8 rapporti',
                'weight' => '798',
                'drivers' => 'Fernando Alonso, Lance Stroll',
                'victories' => '0',
                'podiums' => '12'
            ],
            [
                'name' => 'Alpine A523',
                'year' => '2023',
                'team' => 'BWT Alpine F1 Team',
                'price' => '€12.500.000',
                'image' => 'https://media.formula1.com/image/upload/f_auto/q_auto/v1676370000/fom-website/2023/Alpine/alpine-a523-launch.jpg',
                'specs' => json_encode([
                    'engine' => 'Renault E-Tech RE23 1.6L V6 Turbo',
                    'power' => '1000+ CV',
                    'fuel' => 'Benzina + Sistema Ibrido',
                    'cylinders' => '6',
                    'rpm' => '15.000 giri/min'
                ]),
                'hybrid' => json_encode([
                    'system' => 'MGU-K + MGU-H Renault',
                    'battery' => 'Batteria al litio Alpine',
                    'recovery' => 'Sistema di recupero energia Renault'
                ]),
                'performance' => json_encode([
                    'topSpeed' => '340+ km/h',
                    'acceleration' => '0-100 km/h in 2.7s',
                    'lateralG' => '4.8G in curva'
                ]),
                'chassis' => 'Monoscocca in fibra di carbonio',
                'suspension_front' => 'Push-rod',
                'suspension_rear' => 'Pull-rod',
                'gearbox' => 'Cambio sequenziale 8 rapporti Renault',
                'weight' => '798',
                'drivers' => 'Pierre Gasly, Esteban Ocon',
                'victories' => '0',
                'podiums' => '1'
            ],
            [
                'name' => 'Ferrari F1-75',
                'year' => '2022',
                'team' => 'Scuderia Ferrari',
                'price' => '€14.500.000',
                'image' => 'https://media.formula1.com/image/upload/f_auto/q_auto/v1645089595/fom-website/2022/Ferrari/ferrari-f1-75-launch.jpg',
                'specs' => json_encode([
                    'engine' => 'Ferrari 066/7 1.6L V6 Turbo',
                    'power' => '1000+ CV',
                    'fuel' => 'Benzina E10 + Sistema Ibrido',
                    'cylinders' => '6',
                    'rpm' => '15.000 giri/min'
                ]),
                'hybrid' => json_encode([
                    'system' => 'MGU-K + MGU-H',
                    'battery' => 'Batteria al litio Ferrari',
                    'recovery' => 'Sistema di recupero energia ottimizzato'
                ]),
                'performance' => json_encode([
                    'topSpeed' => '350+ km/h',
                    'acceleration' => '0-100 km/h in 2.5s',
                    'lateralG' => '5.2G in curva'
                ]),
                'chassis' => 'Monoscocca in fibra di carbonio',
                'suspension_front' => 'Push-rod',
                'suspension_rear' => 'Pull-rod',
                'gearbox' => 'Cambio sequenziale 8 rapporti + retromarcia',
                'weight' => '798',
                'drivers' => 'Charles Leclerc, Carlos Sainz',
                'victories' => '4',
                'podiums' => '13'
            ],
            [
                'name' => 'Red Bull RB18',
                'year' => '2022',
                'team' => 'Oracle Red Bull Racing',
                'price' => '€17.000.000',
                'image' => 'https://media.formula1.com/image/upload/f_auto/q_auto/v1644411970/fom-website/2022/Red%20Bull/red-bull-rb18-launch.jpg',
                'specs' => json_encode([
                    'engine' => 'Red Bull Powertrains RBPT 1.6L V6 Turbo',
                    'power' => '1000+ CV',
                    'fuel' => 'Benzina E10 + Sistema Ibrido',
                    'cylinders' => '6',
                    'rpm' => '15.000 giri/min'
                ]),
                'hybrid' => json_encode([
                    'system' => 'MGU-K + MGU-H',
                    'battery' => 'Batteria al litio avanzata',
                    'recovery' => 'Sistema ERS di nuova generazione'
                ]),
                'performance' => json_encode([
                    'topSpeed' => '355+ km/h',
                    'acceleration' => '0-100 km/h in 2.4s',
                    'lateralG' => '5.5G in curva'
                ]),
                'chassis' => 'Monoscocca in carbonio ultra-leggera',
                'suspension_front' => 'Push-rod innovativo',
                'suspension_rear' => 'Pull-rod aerodinamico',
                'gearbox' => 'Cambio sequenziale 8 rapporti',
                'weight' => '798',
                'drivers' => 'Max Verstappen, Sergio Pérez',
                'victories' => '17',
                'podiums' => '32'
            ],
            [
                'name' => 'Mercedes W13',
                'year' => '2022',
                'team' => 'Mercedes-AMG Petronas F1 Team',
                'price' => '€15.500.000',
                'image' => 'https://media.formula1.com/image/upload/f_auto/q_auto/v1645187200/fom-website/2022/Mercedes/mercedes-w13-launch.jpg',
                'specs' => json_encode([
                    'engine' => 'Mercedes-AMG F1 M13 E Performance 1.6L V6 Turbo',
                    'power' => '1000+ CV',
                    'fuel' => 'Benzina E10 + Sistema Ibrido',
                    'cylinders' => '6',
                    'rpm' => '15.000 giri/min'
                ]),
                'hybrid' => json_encode([
                    'system' => 'MGU-K + MGU-H Mercedes',
                    'battery' => 'Batteria al litio Mercedes',
                    'recovery' => 'Sistema ibrido avanzato'
                ]),
                'performance' => json_encode([
                    'topSpeed' => '345+ km/h',
                    'acceleration' => '0-100 km/h in 2.6s',
                    'lateralG' => '5G in curva'
                ]),
                'chassis' => 'Monoscocca no-sidepods concept',
                'suspension_front' => 'Push-rod',
                'suspension_rear' => 'Pull-rod',
                'gearbox' => 'Cambio sequenziale 8 rapporti Mercedes',
                'weight' => '798',
                'drivers' => 'Lewis Hamilton, George Russell',
                'victories' => '1',
                'podiums' => '9'
            ],
            [
                'name' => 'McLaren MCL36',
                'year' => '2022',
                'team' => 'McLaren F1 Team',
                'price' => '€13.000.000',
                'image' => 'https://media.formula1.com/image/upload/f_auto/q_auto/v1644595200/fom-website/2022/McLaren/mclaren-mcl36-launch.jpg',
                'specs' => json_encode([
                    'engine' => 'Mercedes-AMG F1 M13 E Performance 1.6L V6 Turbo',
                    'power' => '1000+ CV',
                    'fuel' => 'Benzina E10 + Sistema Ibrido',
                    'cylinders' => '6',
                    'rpm' => '15.000 giri/min'
                ]),
                'hybrid' => json_encode([
                    'system' => 'MGU-K + MGU-H',
                    'battery' => 'Batteria al litio',
                    'recovery' => 'Sistema ERS Mercedes'
                ]),
                'performance' => json_encode([
                    'topSpeed' => '342+ km/h',
                    'acceleration' => '0-100 km/h in 2.6s',
                    'lateralG' => '5G in curva'
                ]),
                'chassis' => 'Monoscocca in fibra di carbonio McLaren',
                'suspension_front' => 'Push-rod',
                'suspension_rear' => 'Pull-rod',
                'gearbox' => 'Cambio sequenziale 8 rapporti',
                'weight' => '798',
                'drivers' => 'Lando Norris, Daniel Ricciardo',
                'victories' => '0',
                'podiums' => '2'
            ],
            [
                'name' => 'Ferrari SF90',
                'year' => '2019',
                'team' => 'Scuderia Ferrari',
                'price' => '€12.000.000',
                'image' => 'https://media.formula1.com/image/upload/f_auto/q_auto/v1550242726/fom-website/2019/Ferrari/ferrari-sf90-launch.jpg',
                'specs' => json_encode([
                    'engine' => 'Ferrari 064 1.6L V6 Turbo',
                    'power' => '950+ CV',
                    'fuel' => 'Benzina + Sistema Ibrido',
                    'cylinders' => '6',
                    'rpm' => '15.000 giri/min'
                ]),
                'hybrid' => json_encode([
                    'system' => 'MGU-K + MGU-H',
                    'battery' => 'Batteria al litio',
                    'recovery' => 'Sistema di recupero energia'
                ]),
                'performance' => json_encode([
                    'topSpeed' => '340+ km/h',
                    'acceleration' => '0-100 km/h in 2.7s',
                    'lateralG' => '5G in curva'
                ]),
                'chassis' => 'Monoscocca in carbonio',
                'suspension_front' => 'Push-rod',
                'suspension_rear' => 'Pull-rod',
                'gearbox' => 'Cambio sequenziale 8 rapporti',
                'weight' => '743',
                'drivers' => 'Sebastian Vettel, Charles Leclerc',
                'victories' => '3',
                'podiums' => '19'
            ],
            [
                'name' => 'Mercedes W11',
                'year' => '2020',
                'team' => 'Mercedes-AMG Petronas F1 Team',
                'price' => '€16.000.000',
                'image' => 'https://media.formula1.com/image/upload/f_auto/q_auto/v1581686400/fom-website/2020/Mercedes/mercedes-w11-launch.jpg',
                'specs' => json_encode([
                    'engine' => 'Mercedes-AMG F1 M11 EQ Performance 1.6L V6 Turbo',
                    'power' => '1000+ CV',
                    'fuel' => 'Benzina + Sistema Ibrido',
                    'cylinders' => '6',
                    'rpm' => '15.000 giri/min'
                ]),
                'hybrid' => json_encode([
                    'system' => 'MGU-K + MGU-H',
                    'battery' => 'Batteria al litio Mercedes',
                    'recovery' => 'Sistema ibrido dominante'
                ]),
                'performance' => json_encode([
                    'topSpeed' => '347+ km/h',
                    'acceleration' => '0-100 km/h in 2.5s',
                    'lateralG' => '5.3G in curva'
                ]),
                'chassis' => 'Monoscocca DAS system',
                'suspension_front' => 'Push-rod con DAS',
                'suspension_rear' => 'Pull-rod',
                'gearbox' => 'Cambio sequenziale 8 rapporti',
                'weight' => '746',
                'drivers' => 'Lewis Hamilton, Valtteri Bottas',
                'victories' => '13',
                'podiums' => '25'
            ],
            [
                'name' => 'Red Bull RB16B',
                'year' => '2021',
                'team' => 'Red Bull Racing Honda',
                'price' => '€15.800.000',
                'image' => 'https://media.formula1.com/image/upload/f_auto/q_auto/v1613984400/fom-website/2021/Red%20Bull/red-bull-rb16b-launch.jpg',
                'specs' => json_encode([
                    'engine' => 'Honda RA621H 1.6L V6 Turbo',
                    'power' => '1000+ CV',
                    'fuel' => 'Benzina + Sistema Ibrido',
                    'cylinders' => '6',
                    'rpm' => '15.000 giri/min'
                ]),
                'hybrid' => json_encode([
                    'system' => 'MGU-K + MGU-H Honda',
                    'battery' => 'Batteria al litio Honda',
                    'recovery' => 'Sistema ERS Honda avanzato'
                ]),
                'performance' => json_encode([
                    'topSpeed' => '352+ km/h',
                    'acceleration' => '0-100 km/h in 2.5s',
                    'lateralG' => '5.4G in curva'
                ]),
                'chassis' => 'Monoscocca in carbonio evoluta',
                'suspension_front' => 'Push-rod',
                'suspension_rear' => 'Pull-rod',
                'gearbox' => 'Cambio sequenziale 8 rapporti',
                'weight' => '752',
                'drivers' => 'Max Verstappen, Sergio Pérez',
                'victories' => '10',
                'podiums' => '20'
            ],
            [
                'name' => 'Alpine A521',
                'year' => '2021',
                'team' => 'Alpine F1 Team',
                'price' => '€11.500.000',
                'image' => 'https://media.formula1.com/image/upload/f_auto/q_auto/v1614873600/fom-website/2021/Alpine/alpine-a521-launch.jpg',
                'specs' => json_encode([
                    'engine' => 'Renault E-Tech 21 1.6L V6 Turbo',
                    'power' => '950+ CV',
                    'fuel' => 'Benzina + Sistema Ibrido',
                    'cylinders' => '6',
                    'rpm' => '15.000 giri/min'
                ]),
                'hybrid' => json_encode([
                    'system' => 'MGU-K + MGU-H Renault',
                    'battery' => 'Batteria al litio Alpine',
                    'recovery' => 'Sistema di recupero Renault'
                ]),
                'performance' => json_encode([
                    'topSpeed' => '338+ km/h',
                    'acceleration' => '0-100 km/h in 2.7s',
                    'lateralG' => '4.9G in curva'
                ]),
                'chassis' => 'Monoscocca in carbonio',
                'suspension_front' => 'Push-rod',
                'suspension_rear' => 'Pull-rod',
                'gearbox' => 'Cambio sequenziale 8 rapporti Renault',
                'weight' => '752',
                'drivers' => 'Fernando Alonso, Esteban Ocon',
                'victories' => '1',
                'podiums' => '3'
            ],
            [
                'name' => 'Alfa Romeo C42',
                'year' => '2022',
                'team' => 'Alfa Romeo F1 Team Stake',
                'price' => '€10.500.000',
                'image' => 'https://media.formula1.com/image/upload/f_auto/q_auto/v1645718400/fom-website/2022/Alfa%20Romeo/alfa-romeo-c42-launch.jpg',
                'specs' => json_encode([
                    'engine' => 'Ferrari 066/7 1.6L V6 Turbo',
                    'power' => '1000+ CV',
                    'fuel' => 'Benzina E10 + Sistema Ibrido',
                    'cylinders' => '6',
                    'rpm' => '15.000 giri/min'
                ]),
                'hybrid' => json_encode([
                    'system' => 'MGU-K + MGU-H',
                    'battery' => 'Batteria al litio',
                    'recovery' => 'Sistema ERS Ferrari'
                ]),
                'performance' => json_encode([
                    'topSpeed' => '335+ km/h',
                    'acceleration' => '0-100 km/h in 2.7s',
                    'lateralG' => '4.8G in curva'
                ]),
                'chassis' => 'Monoscocca in fibra di carbonio',
                'suspension_front' => 'Push-rod',
                'suspension_rear' => 'Pull-rod',
                'gearbox' => 'Cambio sequenziale 8 rapporti',
                'weight' => '798',
                'drivers' => 'Valtteri Bottas, Zhou Guanyu',
                'victories' => '0',
                'podiums' => '0'
            ],
            [
                'name' => 'Haas VF-23',
                'year' => '2023',
                'team' => 'MoneyGram Haas F1 Team',
                'price' => '€9.500.000',
                'image' => 'https://media.formula1.com/image/upload/f_auto/q_auto/v1675353600/fom-website/2023/Haas/haas-vf-23-launch.jpg',
                'specs' => json_encode([
                    'engine' => 'Ferrari 066/10 1.6L V6 Turbo',
                    'power' => '1000+ CV',
                    'fuel' => 'Benzina + Sistema Ibrido',
                    'cylinders' => '6',
                    'rpm' => '15.000 giri/min'
                ]),
                'hybrid' => json_encode([
                    'system' => 'MGU-K + MGU-H',
                    'battery' => 'Batteria al litio',
                    'recovery' => 'Sistema ERS Ferrari'
                ]),
                'performance' => json_encode([
                    'topSpeed' => '330+ km/h',
                    'acceleration' => '0-100 km/h in 2.8s',
                    'lateralG' => '4.7G in curva'
                ]),
                'chassis' => 'Monoscocca in carbonio Haas-Ferrari',
                'suspension_front' => 'Push-rod',
                'suspension_rear' => 'Pull-rod',
                'gearbox' => 'Cambio sequenziale 8 rapporti Ferrari',
                'weight' => '798',
                'drivers' => 'Kevin Magnussen, Nico Hulkenberg',
                'victories' => '0',
                'podiums' => '0'
            ],
            [
                'name' => 'Williams FW45',
                'year' => '2023',
                'team' => 'Williams Racing',
                'price' => '€10.000.000',
                'image' => 'https://media.formula1.com/image/upload/f_auto/q_auto/v1676467200/fom-website/2023/Williams/williams-fw45-launch.jpg',
                'specs' => json_encode([
                    'engine' => 'Mercedes-AMG F1 M14 E Performance 1.6L V6 Turbo',
                    'power' => '1000+ CV',
                    'fuel' => 'Benzina + Sistema Ibrido',
                    'cylinders' => '6',
                    'rpm' => '15.000 giri/min'
                ]),
                'hybrid' => json_encode([
                    'system' => 'MGU-K + MGU-H',
                    'battery' => 'Batteria al litio',
                    'recovery' => 'Sistema ERS Mercedes'
                ]),
                'performance' => json_encode([
                    'topSpeed' => '335+ km/h',
                    'acceleration' => '0-100 km/h in 2.7s',
                    'lateralG' => '4.8G in curva'
                ]),
                'chassis' => 'Monoscocca in carbonio Williams',
                'suspension_front' => 'Push-rod',
                'suspension_rear' => 'Pull-rod',
                'gearbox' => 'Cambio sequenziale 8 rapporti',
                'weight' => '798',
                'drivers' => 'Alexander Albon, Logan Sargeant',
                'victories' => '0',
                'podiums' => '0'
            ],
            [
                'name' => 'AlphaTauri AT04',
                'year' => '2023',
                'team' => 'Scuderia AlphaTauri',
                'price' => '€11.000.000',
                'image' => 'https://media.formula1.com/image/upload/f_auto/q_auto/v1676563200/fom-website/2023/AlphaTauri/alphatauri-at04-launch.jpg',
                'specs' => json_encode([
                    'engine' => 'Red Bull Powertrains RBPT 1.6L V6 Turbo',
                    'power' => '1000+ CV',
                    'fuel' => 'Benzina + Sistema Ibrido',
                    'cylinders' => '6',
                    'rpm' => '15.000 giri/min'
                ]),
                'hybrid' => json_encode([
                    'system' => 'MGU-K + MGU-H',
                    'battery' => 'Batteria al litio',
                    'recovery' => 'Sistema ERS Red Bull'
                ]),
                'performance' => json_encode([
                    'topSpeed' => '338+ km/h',
                    'acceleration' => '0-100 km/h in 2.7s',
                    'lateralG' => '4.9G in curva'
                ]),
                'chassis' => 'Monoscocca in fibra di carbonio',
                'suspension_front' => 'Push-rod',
                'suspension_rear' => 'Pull-rod',
                'gearbox' => 'Cambio sequenziale 8 rapporti',
                'weight' => '798',
                'drivers' => 'Yuki Tsunoda, Daniel Ricciardo',
                'victories' => '0',
                'podiums' => '0'
            ]
     ];

        foreach ($cars as $carData) {
                   Car::create($carData);
                 }
            }
        }
