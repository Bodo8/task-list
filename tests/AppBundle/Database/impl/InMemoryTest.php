<?php
/**
 * Created by PhpStorm.
 * User: boguslaw
 * Date: 19.12.18
 * Time: 08:37
 */

namespace AppBundle\Database\impl;

use PHPUnit\Framework\TestCase;

class InMemoryTest extends TestCase
{

    public function testSaveOneTask()
    {
        $year = 2018;
        $month = 12;
        $week = 51;
        $day = 22;
        $inMemory = new InMemory();
        $task = $inMemory->createTask(1, "to buy butter", true);
        $inMemory->saveTask($year, $month, $week, $day, $task);
        $allTask = $inMemory->getAllTask();
        $actualTask = $allTask[$year][$month][$week][$day][0];
        $this->assertEquals($task, $actualTask);
    }

    public function testDeleteTask()
    {
        $year = 2018;
        $month = 12;
        $week = 51;
        $day = 22;
        $inMemory = new InMemory();
        $task = $inMemory->createTask(1, "to buy some", false);
        $task1 = $inMemory->createTask(2, "to buy butter", false);
        $task2 = $inMemory->createTask(3, "to buy milk", true);
        $inMemory->saveTask($year, $month, $week, $day, $task1);
        $inMemory->saveTask($year, $month, $week, $day, $task);
        $inMemory->saveTask($year, $month, $week, $day, $task2);
        $inMemory->deleteTask($year, $month, $week, $day, $task);

        $tabTasks = $inMemory->getAllTask();
        $daysTab = $tabTasks [$year] [$month] [$week] [$day];
        $actualSizeTab = count($daysTab);
        $this->assertEquals(2, $actualSizeTab);

    }

}
