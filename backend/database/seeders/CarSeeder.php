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
            ]
        ];

        foreach ($cars as $carData) {
            Car::create($carData);
        }
    }
}
