<?php
/**
 * Created by PhpStorm.
 * User: boguslaw
 * Date: 18.12.18
 * Time: 06:35
 */

namespace AppBundle\Entity;

use PHPUnit\Framework\TestCase;

class DeadlineTaskTest extends TestCase
{
    private $task;

    public function setUp()
    {
        $this->task = new Task(1, "to buy bread", false);
    }

    public function test__construct()
    {
        $expectedYear = 2018;
        $expectedMonth = 12;
        $expectedWeek = 51;
        $expectedDay = 19;
        $deadLineTask = new DeadLineTask($expectedYear, $expectedMonth,
            $expectedWeek, $expectedDay, $this->task);
        $actualYear = $deadLineTask->getYear();
        $actualMonth = $deadLineTask->getMonth();
        $actualWeek = $deadLineTask->getWeek();
        $actualDay = $deadLineTask->getDay();
        $actualTask = $deadLineTask->getTask();

        $this->assertEquals($expectedYear, $actualYear);
        $this->assertEquals($expectedMonth, $actualMonth);
        $this->assertEquals($expectedWeek, $actualWeek);
        $this->assertEquals($expectedDay, $actualDay);
        $this->assertSame($this->task, $actualTask);
    }
}
