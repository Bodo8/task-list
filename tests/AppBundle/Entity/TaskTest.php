<?php
/**
 * Created by PhpStorm.
 * User: boguslaw
 * Date: 17.12.18
 * Time: 06:01
 */

namespace AppBundle\Entity;

use PHPUnit\Framework\TestCase;

class TaskTest extends TestCase
{

    public function testCreateTask()
    {
        $expectDescription = "to buy bread";
        $expectedId = 1;
        $task = new Task($expectedId, $expectDescription, false);
        $actualDescription = $task->getDescription();
        $actualId = $task->getTaskId();
        $this->assertEquals($expectDescription, $actualDescription);
        $this->assertEquals($expectedId, $actualId);
    }
}
