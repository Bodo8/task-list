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

    public function testSaveTask()
    {

    }

    public function testCreateTask()
    {
        $inMemory = new InMemory();
        $task = $inMemory->createTask(1, "to buy butter", true);
        $deadlineTask = $inMemory->createDeadlineTask(2018, 12, 51, 22, $task);
        $inMemory->saveTask($deadlineTask);
        $allTask = $inMemory->getAllTask();
        $actualTask = $allTask[0];
        $this->assertEquals($task, $actualTask);
    }
}
