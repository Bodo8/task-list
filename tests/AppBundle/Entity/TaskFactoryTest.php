<?php
/**
 * Created by PhpStorm.
 * User: boguslaw
 * Date: 22.12.18
 * Time: 07:08
 */

namespace AppBundle\Entity;

use PHPUnit\Framework\TestCase;

class TaskFactoryTest extends TestCase
{

    public function testBuild()
    {
        $director = TaskFactory::director();
        $director->withId(1);
        $director->withDescription("to buy some");
        $director->withImportantTask(true);
        $task = $director->create();
        $this->assertEquals("to buy some", $task->getDescription());
    }

    public function testWithId()
    {
        $director = TaskFactory::director();
        $expectedDescription = "buy to chocolate";
        $task = $director->createWithId(1, $expectedDescription, false);
        $this->assertEquals($expectedDescription, $task->getDescription());
    }

    public function testWithoutId()
    {
        $director = TaskFactory::director();
        $expectedDescription = "buy to chocolate";
        $task = $director->createWithoutId($expectedDescription, false);
        $this->assertEquals($expectedDescription, $task->getDescription());
    }
}
